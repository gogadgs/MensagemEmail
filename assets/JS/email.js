
const enviar = document.querySelector('#contatoFormulário');

enviar.addEventListener('submit',(evento)=>{
    /* ignorando o evento padrao do navegador  */
    evento.preventDefault();

    /* seção de captura de dados dos campos do formulário */
    const email = document.querySelector('#email').value;
    const mensagem = document.getElementById('message').value;
    const nome = document.querySelector('#name').value;
    console.log(email,mensagem,nome);


    /* email  recebido com texto padrao co possiveis variaveis na api emailjs  */
    var templateParams = {
        from_name: nome,
        to_email: email,
        message: mensagem
    };
    emailjs.init('_ZF2at62NWpnaXISU');
    emailjs.send("service_2jiyxvd","template_09bla9p",templateParams).then((response)=>{
        try{
        console.log("Email enviado com sucesso!");
        alert('Email enviado com sucesso');
        document.getElementById('email').value='';
        }catch{
            erro(response.error);
        }
    })
});


const erro = (error)=>{
   console.error('Ocorreu um erro ao enviar o email ',error);
        throw new Error('Ocorreu um erro ao enviar o email ')
}