
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title ,tag)
        }, this) // questo this punta fuori il foreach
                 // e ci permette di richiamare title
                 // quindi quando poi scriveremo this.title
                 // nel console.log riusciamo ad accedere a quei valori
                 // se passi con il mouse su this
                 // ti fa vedere a cosa puoi andare a puntare!
    }
}

video.showTags();