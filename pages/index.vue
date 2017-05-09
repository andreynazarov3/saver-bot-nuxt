<template>
    <div class="main">
        <h1>Tell The World Global Real-Time Timeline</h1>
        <posts :posts="posts"></posts>
    </div>
</template>
<script>
    import firebase from 'firebase';
    import posts from '~components/Posts.vue';
    export default {
        components: {
          posts
        },
        data () {
            return {
                posts: []
            }
        },
        mounted () {
            const config = {
                apiKey: "AIzaSyAsfn918lWJPNldT1zDbv8XdCfye5RTUAM",
                authDomain: "telltheworld-33f6c.firebaseapp.com",
                databaseURL: "https://telltheworld-33f6c.firebaseio.com",
                projectId: "telltheworld-33f6c",
                storageBucket: "telltheworld-33f6c.appspot.com",
                messagingSenderId: "541955104614"
            }
            firebase.initializeApp(config);
            const db = firebase.database();
            const storage = firebase.storage();
            const storageRef = storage.ref();
            const posts = db.ref("/posts");
            const users = db.ref("/users");
            let newPosts = posts.limitToLast(20);
            newPosts.on('child_added', (data) => {
                let post = data.val();
                post.key = data.key;
                this.posts.unshift(post);
                if (post.type === "photo") {
                    storageRef.child(post.user_id + '/' + post.fileName).getDownloadURL()
                        .then((url) => {
                            let element = this.posts.find((element, index, array) => {
                                if (element.key === data.key) return element;
                            })
                            element.link = url;
                            // copy-paste array to refresh compenent
                            let postsCopy = this.posts.slice();
                            this.posts = postsCopy;
                        })
                        .catch((err) => console.log(err))
                }
            })
        }
    }

</script>

<style lang="scss">
    .posts {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > * {
            margin: 10px;
            max-width:300px;
            width:100%;
        }
        img {
            width:100%;
        }
        .card-block {
            display: flex;
            flex-direction:column;
            .card-text:first-child {
                flex:1;
            }
        }
    }
</style>
