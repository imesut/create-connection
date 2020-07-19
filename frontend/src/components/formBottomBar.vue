<template>
    <div class="card-footer text-right">
        <div class="d-flex">
            <a href="javascript:void(0)" class="btn btn-link">{{ cancelButtonText }}</a>
            <button type="submit" class="btn btn-primary ml-auto" v-bind:text="submitButtonText">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'formBottomBar',
        props: {
            submitButtonText: String,
            cancelButtonText: String
        }
    }
</script>