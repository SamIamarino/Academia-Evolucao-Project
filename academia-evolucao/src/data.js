import photo1 from './assets/fotoAcademia.png'
import photoPeso from './assets/carafazendoexercicio.png'


export const CARROUSEL_IMAGES = [
    {
        imageUrl: photo1,
        description: 'testeDescrição1'
    },
    {
        imageUrl: photoPeso,
        description: 'testeDescrição2'
    },
    {
        imageUrl: photo1,
        description: 'testeDescrição3'
    },
    {
        imageUrl: photoPeso,
        description: 'testeDescrição4'
    },
];

// configurar este primeiro 
export const PLANO_CONTENT = [
    {
        plano: 'Semestral',
        imagemPlano: photoPeso, 
        description: 'Plano semestral, parcelado em 6 vezes, o pagamento pode ser realizado mensalmente na recepçao ou parceado no cartão todos os planos contém contrato'},
    {
        plano: 'Trimestral',
        imagemPlano: photoPeso, 
        description: 'Plano trimestral, parcelado em 3 vezes, o pagamento pode ser realizado mensalmente na recepçao ou parceado no cartãotodos os planos contém contrato'
    },
    {
        plano: 'Mensal',
        imagemPlano: photoPeso, 
        description: 'Plano mensal no valor de r$ 130,00, o aluno pode frequentar a academia por um mêstodos os planos contém contrato'
    },
];

export const ABOUT_CARD_CONTENT = [
    {imageUrl: photo1 , title: '' , description: ''},
    {imageUrl: photo1 , title: '' , description: ''},
    {imageUrl: photo1 , title: '' , description: ''},
]