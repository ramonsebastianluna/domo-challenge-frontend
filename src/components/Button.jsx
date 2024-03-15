import arrow from '../assets/icons/arrow.png'

const Button = () => {
    return (
        <button className="btn btn-secondary rounded-1 px-3 m-2 button">
            Our Projects <img src={arrow} alt="arrow-img" />
        </button>
    )
}

export default Button