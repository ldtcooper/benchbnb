export const signup = (newUser) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: newUser
    }
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: user
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
