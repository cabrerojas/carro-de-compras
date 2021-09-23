import { Component } from "react";
import BubbleAlert from './BubbleAlert'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}


class Carro extends Component {

    render() {
        return (
            <div >
                <span style={styles.bubble} > 
                    <BubbleAlert value={10} />
                 </span>
                <button style={styles.carro}>
                    Carro
                </button>     
            </div>
        )
    }

}

export default Carro