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
interface ShowGalleryDto {
    id: nubmer;
    title: string;
    subTitle: string;
    section: string;
    description: string;
    images: FileList | null
}
interface ShowGalleryRequestDto {
    title?: string| null;
    subTitle?: string| null;
    dateTime?: DateTime| null;
    description?: string| null;
    dateTimeCondition: string;
    pageNumber?: number | null;
    pageSize?: number| null;
    includeAttachments : boolean;
}   


