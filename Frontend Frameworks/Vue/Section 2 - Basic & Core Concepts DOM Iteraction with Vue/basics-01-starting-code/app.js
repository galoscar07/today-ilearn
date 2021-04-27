const app = Vue.createApp({
    // data here is a reserved word and acts like context_dictionary in python
    // data: function() {}
    // data() {} same thing as above
    data() {
        // Always return an object
        return {
            courseGoal: 'Finish this course asap!',
            vueLink: 'https://vuejs.org/v2/guide/'
        };
    }
});

// mount should contain a css selector
app.mount('#user-goal')

// For outputting data you have 2 possibilities, the first one is to give the data in the context
// And use if from there by interposing in the html. The second solution is using the v-bind
// this is a reserved name for the directive. The v-bind tels the attribute on the html document
// to bind it to the class hence giving it access to the value