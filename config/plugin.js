module.exports = ({env}) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                apiKey: env('CLOUDINARY_API_KEY'),
                api_secrent: env('CLOUDINARY_SECRET')
            },
            actionOptions: {
                upload: {},
                delete: {},
            }
        }
    }
});