interface CreateGalleryDto {
    title: string;
    subTitle: string;
    section: string;
    description: string;
    images: FileList | null
}
interface UpdateGalleryDto {
    id: nubmer;
    title: string;
    subTitle: string;
    section: string;
    description: string;
    images: FileList | null
}

