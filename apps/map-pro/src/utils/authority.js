const KEY = 'my-authority';

export function getAuthority() {
  const authorityString = localStorage.getItem(KEY) || '{}';
  return JSON.parse(authorityString);
}

export function setAuthority(authority) {
  localStorage.setItem(KEY, JSON.stringify(authority));
}

export function deleteAuthority() {
  localStorage.removeItem(KEY);
}
