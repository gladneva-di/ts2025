import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{ backgroundImage: `url('./card-bg.png')` }}>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles['currency']}>₽</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src='./product_cart.svg' alt='Иконка добавить' />
                    </button>
                    <div className={styles['raiting']}>
                        {props.rating}
                        <img src='./star.svg' alt='Иконка звезды' />
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.name}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;