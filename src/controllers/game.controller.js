import User from '../models/user.model.js'; // Asegúrate de importar tu modelo
import { getCuentaClashOfClans } from '../services/clashOfClans.services.js';


//CLASH OF CLANS
export const saveCuentaClashOfClans = async (req, res) => {
  try {
    const { tagJugador } = req.body;
    const { id } = req.params;
    const data = await getCuentaClashOfClans(tagJugador);

    // Buscar al usuario por su ID
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Actualizar o crear las estadísticas de Clash of Clans en el perfil del usuario
    const clashOfClansStats = {
      tag: data.tag,
      name: data.name,
      townHallLevel: data.townHallLevel,
      expLevel: data.expLevel,
      trophies: data.trophies,
      bestTrophies: data.bestTrophies,
      warStars: data.warStars,
      attackWins: data.attackWins,
      defenseWins: data.defenseWins,
    };

    // Verificar si ya existen estadísticas de Clash of Clans para el usuario
    const gameIndex = user.games.findIndex(game => game.game === 'Clash of Clans');

    if (gameIndex !== -1) {
      // Si existen, actualiza las estadísticas
      user.games[gameIndex].clashOfClans = clashOfClansStats;
    } else {
      // Si no existen, agrega un nuevo juego con estadísticas de Clash of Clans
      user.games.push({
        game: 'Clash of Clans',
        clashOfClans: clashOfClansStats,
      });
    }

    // Guardar el usuario actualizado
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching player data' });
  }
};
