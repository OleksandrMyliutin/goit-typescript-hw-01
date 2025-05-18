type Message = {
    text:string
};

function showMessage(message: Message): void {
    console.log(message.text);
}


function calc(num1:number, num2:number) :number {
    return num1 + num2;
}

function customError(errorInfo:string): never {
    throw new Error(`Error occurred: ${errorInfo}`);
}
