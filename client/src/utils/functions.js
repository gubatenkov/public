export const isEmailValid = (email) => {
  if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  } else {
    return false;
  }
};

export const searchItem = (items, query) => {
  if (query.length === 0) return items;

  return items.filter((i) => {
    if (i === undefined) {
      // eslint-disable-next-line
      return;
    }
    if (
      i.name !== undefined &&
      i.name.toLowerCase().includes(query.trim().toLowerCase())
    ) {
      return i;
    }
    if (
      i.email !== undefined &&
      i.email.toLowerCase().includes(query.trim().toLowerCase())
    ) {
      return i;
    }
    if (
      i.phone !== undefined &&
      i.phone.toLowerCase().includes(query.trim().toLowerCase())
    ) {
      return i;
    }
    return null;
  });
};
