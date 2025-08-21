import api from "./api";

export async function searchPlayers(name) {
  try {
    const { data } = await api.get("/searchplayers.php", {
      params: { p: name },
    });

    return Array.isArray(data?.player) ? data.player : [];
  } catch (err) {
    console.error("Erro na requisição searchPlayers:", err?.message || err);
    return []; 
  }
}

