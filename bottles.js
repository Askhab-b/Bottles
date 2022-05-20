function generateSingleStanza(number) {
    let strBeer = 'бутылок';
    if (number % 10 === 1 && number !== 11 || number === 1 && number !== 11) {    
        strBeer = 'бутылка'
    } else if ((number % 10 === 2 || number % 10 === 3 || number % 10 === 4) && number > 20) {

        strBeer = 'бутылки'
    } else if (number <= 4 && number !== 0) {

        strBeer = 'бутылки'
    }



    return strBeer

}






function generateSongText() {

    for (let i = 99; i > 0; i--) {

        console.log(`${i} ${generateSingleStanza(i)}  пива на стене ${i}${generateSingleStanza(i)} пива!`)
        console.log(`Возьми одну, пусти по кругу${i-1} ${generateSingleStanza(i-1)} пива на стене!`)



    }
}  