<template>
    <div class="msg">
        <h3>Edit Post</h3>
        <div class="msg">
            <div class="msg" v-for="(msg, index) in messages" :key="index">
                <div v-if="$route.params.id == msg.pk">
                    <p>Title</p>
                    <input class="msg-subject" v-model="title" :placeholder = "[[ msg.title ]]">
                    <p>Text</p>
                    <input class="msg-body" v-model="text" :placeholder = "[[ msg.text ]]">
                    <br><br>
                    <input type="submit" @click="editMessage({ title, text })" value="Edit" />
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'edit',
         data() {
            return {
            title: "",
            text: "",
            };
        },
        computed: mapState({
            messages: state => state.messages.messages
        }),
        methods: mapActions('messages', [
            'editMessage',
        ]),
        created() {
            this.$store.dispatch('messages/getMessages')
        },
        methods: {
            log(message){
                console.log(message);
            }
        }
    }
</script>