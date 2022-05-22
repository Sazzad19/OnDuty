<template>
    <div>

    <modal name="signUpModal">
        <div class="form-div" v-if="activePart == 'signin'">
            <div class="signUpHeader">Sign In</div>
        <form class="form-group">
            <input type="text" class="signUpInput form-control" placeholder="Username" name="username"/>
            <input type="password" class="signUpInput form-control" placeholder="Password" name="password"/>
        </form>
        <div><button class="signUpButton btn btn-success" @click="logIn">Sign In</button></div>
        <div class="modal-footer d-flex justify-content-center">
        <div class="signup-section">Not a member yet? <a href="#" class="text-info" @click="changeState"> Sign Up</a>.</div>
      </div>
        </div>
          <div class="form-div" v-if="activePart == 'signup'">
            <div class="signUpHeader">Sign Up</div>
        <form class="form-group">
            <input type="text" class="signUpInput form-control" placeholder="Name" name="name"/>
            <input type="text" class="signUpInput form-control" placeholder="Username" name="username"/>
            <input type="password" class="signUpInput form-control" placeholder="Password" name="password"/>
        </form>
        <div><button class="signUpButton btn btn-success" @click="signUp">Sign Up</button></div>
        <div class="modal-footer d-flex justify-content-center">
        <div class="signup-section">Already member? <a href="#" class="text-info" @click="changeState"> Sign In</a>.</div>
      </div>
        </div>
       
                </modal>
    </div>
</template>

<script>
export default {
    name: 'SignUpModal',

    data() {
        return {
            activePart : 'signin'
        };
    },
props: {
showModal: Boolean,
},
watch: {
showModal: function(newValue){
if(newValue){
    this.$modal.show('signUpModal')
}
else{
    this.$modal.hide('signUpModal')
}
}
},
    mounted() {
        if(this.show){
         this.$modal.show('signUpModal')
        }
    },

    methods: {
        logIn(){
            this.$store.state.loggedIn = true;
            this.$modal.hide('signUpModal')
        },
        signUp(){
            this.$store.state.loggedIn = true;
            this.$modal.hide('signUpModal')
        },
        changeState(){
            if(this.activePart == 'signin'){
                this.activePart = 'signup'
            }
            else{
                this.activePart = 'signin'
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.form-div{
    padding: 37px;
    padding-top: 10px;
}
.signUpInput{
    margin-top: 10px;
}
.signUpButton{
    width: 100%;
}
.signUpHeader{
    text-align: center;
    font-size: 20px;
}
</style>