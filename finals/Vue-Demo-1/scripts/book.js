const books = Vue.createApp({

    data() {
        return {
            showBooks: true,
            btitle: 'The Jordan',
            bauthor: 'Sean Warner', 
            year: 2012
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
    }
}
);
books.mount('#books')