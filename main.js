const app = Vue.createApp({
    data() {
        return {
            message: "hello world",
            num: 5,
            img: "https://dummyimage.com/600x600/b2f/b2f.jpg",
            link: "https://google.com",
            product: "sunglass",
            quantity: 50,
            sale: true,
            styleObject: { backgroundColor: 'green', border: 'solid orange 5px' },
            shapeFlag: true,
            users: [
                {
                    id: 1,
                    username: 'buyi',
                    profession: 'developer',
                },
                {
                    id: 2,
                    username: 'jiasen',
                    profession: 'manager',
                },
                {
                    id: 3,
                    username: 'handsome',
                    profession: 'gardener',
                },
                {
                    id: 4,
                    username: 'house',
                    profession: 'driver',
                },

            ],
            first_name: 'david',
            last_name: 'beckham',
            color: 'violet',
            comments: [
                {
                    id: 1,
                    username: 'bob',
                    comment: 'nice book',
                },
                {
                    id: 2,
                    username: 'bob',
                    comment: 'nice book',
                },
                {
                    id: 3,
                    username: 'bob',
                    comment: 'nice book',
                },
                {
                    id: 4,
                    username: 'bob',
                    comment: 'nice book',
                },
            ],
        }
    },
    computed: {
        getRandomComputed() {
            return Math.random()
        },
        fullName() {
            return this.first_name+" "+this.last_name
        },
        reverseFullName() {
            first_name = this.first_name.split("").reverse().join("")
            last_name = this.last_name.split("").reverse().join("")
            return first_name+" "+last_name
        }
    },
    methods: {
        increasement() {
            this.num += 1
        },
        overbox() {
            this.num += 1
        },
        changeShape() {
            this.shapeFlag = !this.shapeFlag
        },
        getRandom() {
            return Math.random()
        }
    }
})

app.component('comment',{
    props:
    {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div class=".container">
            <p><strong>{{comment.username}}</strong></p>
            <p>{{comment.comment}}</p>
            <hr>
        </div>
    `,
})

const mountedApp = app.mount("#app")