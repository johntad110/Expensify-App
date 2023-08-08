export default {
    getConstants: jest.fn(),
    pick: jest.fn(),
    releaseSecureAccess: jest.fn(),
    pickDirectory: jest.fn(),

    types: Object.freeze({
        allFiles: 'public.item',
        audio: 'public.audio',
        csv: 'public.comma-separated-values-text',
        doc: 'com.microsoft.word.doc',
        docx: 'org.openxmlformats.wordprocessingml.document',
        images: 'public.image',
        pdf: 'com.adobe.pdf',
        plainText: 'public.plain-text',
        ppt: 'com.microsoft.powerpoint.ppt',
        pptx: 'org.openxmlformats.presentationml.presentation',
        video: 'public.movie',
        xls: 'com.microsoft.excel.xls',
        xlsx: 'org.openxmlformats.spreadsheetml.sheet',
        zip: 'public.zip-archive',
      })
};
