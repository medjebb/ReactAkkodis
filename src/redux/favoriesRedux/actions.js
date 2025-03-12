export const FAVORITES_ADD = 'FAVORITES_ADD';
export const FAVORITES_REMOVE = 'FAVORITES_REMOVE';
export const FAVORITES_CLEAR = 'FAVORITES_CLEAR';

export const addFavorite = (id) => ({
  type: FAVORITES_ADD,
  payload: { id },
});

export const removeFavorite = (id) => ({
  type: FAVORITES_REMOVE,
  payload: { id },
});

export const clearFavorites = () => ({
    type: FAVORITES_CLEAR,
    });