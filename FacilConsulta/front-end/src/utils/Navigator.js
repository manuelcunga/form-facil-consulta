function submit() {
    alert('Submittttedd!');
}
export default {
    methods: {
        nextButtonText() {
            if (this.$route.name === 'secondStep') { return 'طلب المنتج' }
            return 'التالي';
        },
        isFirst() {
            return this.$route.name === 'firstStep';
        },
        navigateNext() {
            if (this.$route.name === 'secondStep') { submit() }
            this.$router.push('/personal-info');
        },
        navigatePrevious() {
            if (this.$route.name === 'secondStep') {
                this.$router.push('/organization-info');
            }
        }
    }
}