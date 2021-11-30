function validateEmailRequisitos(email) {
    const re = /\S+@\S+\.com/;
    return re.test(email);
      // Solução de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  }

  module.exports = {
      validateEmailRequisitos,
  };