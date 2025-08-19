#!/bin/bash

# ==============================
# Configurações iniciais
# ==============================
PROJECT_DIR="$1"  # Caminho para o projeto React Native/Expo
PROFILE="release" # Perfil do eas.json
APK_OUTPUT_DIR="$PROJECT_DIR/apk_builds"

if [ -z "$PROJECT_DIR" ]; then
  echo "Uso: $0 /caminho/para/projeto"
  exit 1
fi

if ! command -v eas &> /dev/null; then
  echo "Erro: eas-cli não encontrado. Instale com 'npm install -g eas-cli'"
  exit 1
fi

if ! command -v npx &> /dev/null; then
  echo "Erro: npx não encontrado. Instale o Node.js/NPM corretamente."
  exit 1
fi

if [ -z "$ANDROID_HOME" ]; then
  export ANDROID_HOME="$HOME/Android/Sdk"
fi

export PATH="$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$PATH"

cd "$PROJECT_DIR" || exit

# ==============================
# Criação do eas.json mínimo se não existir
# ==============================
if [ ! -f eas.json ]; then
  echo "eas.json não encontrado. Criando configuração mínima..."
  cat > eas.json <<EOL
{
  "cli": {
    "version": ">= 16.17.4"
  },
  "build": {
    "release": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
EOL
  echo "Arquivo eas.json criado."
fi

# ==============================
# Verificar pastas android/ios
# ==============================
if [ ! -d "android" ] || [ ! -d "ios" ]; then
  echo "Pastas nativas android/ios não encontradas. Executando prebuild..."
  npx expo prebuild
fi

# ==============================
# Build do APK
# ==============================
echo "Iniciando build do APK..."
eas build -p android --profile $PROFILE 

# ==============================
# Preparando diretório de APK
# ==============================
mkdir -p "$APK_OUTPUT_DIR"

# Procura o APK gerado no cache do EAS
APK_FILE=$(find ~/.eas/build-cache -type f -name "*.apk" | tail -n 1)

if [ -z "$APK_FILE" ]; then
  echo "APK não encontrado. Verifique o EAS Build ou baixe manualmente."
  exit 1
fi

cp "$APK_FILE" "$APK_OUTPUT_DIR/"
APK_FILE="$APK_OUTPUT_DIR/$(basename "$APK_FILE")"
echo "APK copiado para $APK_FILE"

# ==============================
# Seleção de dispositivo
# ==============================
DEVICES=($(adb devices | grep -w "device" | awk '{print $1}'))

if [ ${#DEVICES[@]} -eq 0 ]; then
  echo "Nenhum dispositivo/emulador conectado."
  exit 1
fi

echo "Dispositivos conectados:"
for i in "${!DEVICES[@]}"; do
  echo "[$i] ${DEVICES[$i]}"
done

read -p "Escolha o número do dispositivo para instalar o APK: " DEVICE_INDEX

if ! [[ "$DEVICE_INDEX" =~ ^[0-9]+$ ]] || [ "$DEVICE_INDEX" -ge "${#DEVICES[@]}" ]; then
  echo "Opção inválida."
  exit 1
fi

SELECTED_DEVICE="${DEVICES[$DEVICE_INDEX]}"
echo "Instalando APK no dispositivo $SELECTED_DEVICE..."

PACKAGE_NAME=$(aapt dump badging "$APK_FILE" | grep package: | awk -F"'" '{print $2}')
adb -s "$SELECTED_DEVICE" uninstall "$PACKAGE_NAME" 2>/dev/null
adb -s "$SELECTED_DEVICE" install -r "$APK_FILE"

echo "APK instalado com sucesso no dispositivo $SELECTED_DEVICE!"