export const validation = {
  onNameValidation: (value) => value !== '', 
  isPasswordNotEmpty: (password) => password !== '',
  isPasswordSatisfiedMaxLen: (password) => password.length > 8,
  isPasswordsSame: (originalPW, confirmationPW) => originalPW === confirmationPW
};
