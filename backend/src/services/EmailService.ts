interface IMailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: ImailMessage
}

//DTO Data Transfer Object

class EmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService;