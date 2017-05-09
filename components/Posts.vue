<template>
        <div class="posts">
            <div class="card" v-for="post in posts">
                <div class="card-header">
                    {{ post.type }}
                </div>
                <div class="card-block">
                    <p v-if="post.text" class="card-text">{{ post.text }}</p>
                    <p class="card-text">
                        <small class="text-muted"></small>
                    </p>
                    <img v-if="post.link" :src="post.link" alt="">
                    <p class="card-text">
                        <small class="text-muted"
                               v-html="'@' + post.username + '<br>Added: ' + (new Date(post.created_at*1000)).toISOString().slice(-13, -5)">

                        </small>
                    </p>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        props: [ 'posts' ],
        methods: {
          updateGrid: function() {
              let msnry = new Masonry('.posts');
              imagesLoaded('.posts', function() {
                  console.log('image loaded');
                  msnry.layout();
              });
          }
        },
        updated () {
            this.updateGrid();
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
