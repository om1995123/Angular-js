import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
export class ProductCatalogController{
    products: Product[] = [
        {
            id: '01',
            name: 'Samsung S23 Ultra',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '89999',
            imgSrc: 'https://th.bing.com/th/id/OIP.yV1-PvDCjqfNf3oqMNN0pgHaHa?w=500&h=500&rs=1&pid=ImgDetMain'
        },
        {
            id: '02',
            name: 'Apple IPhone 16 Pro',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '115000',
            imgSrc: 'https://th.bing.com/th/id/OIP.5cV6Bxiey16ZNKucbF2r0QHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: '03',
            name: 'Samsung S25',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '49999',
            imgSrc: 'https://th.bing.com/th/id/OIP.tg3dFJQU9lKAudJ0nz54NAAAAA?rs=1&pid=ImgDetMain'
        },
        {
            id: '04',
            name: 'Apple IPhone 15',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '51999',
            imgSrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525391_sd.jpg'
        },
        {
            id: '05',
            name: 'Samsung Fold 6',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '149999',
            imgSrc: 'https://th.bing.com/th/id/OIP.wSsxwhQmFuROX5EyqvvVWwHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: '06',
            name: 'Apple IPhone 16 Pro Max',
            type: 'Electronics',
            subtype: 'Mobile',
            price: '165000',
            imgSrc: 'https://shopwice.com/wp-content/uploads/2024/10/16-promax.jpg'
        }
    ]
    constructor($scope: IScopeCustom){
        $scope['vm'] = this;
    }
}