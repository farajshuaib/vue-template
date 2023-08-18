import * as yup from 'yup';

export const createGallarySchema = yup.object().shape({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    section: yup.string().required(),
    description: yup.string().required(),
});
