import {Select} from './selector1/select' 
import './selector1/styless.scss'

let select = new Select(`#select` , {

    placeholder: 'Сhoose an element',
    selectedId : '1',

    data : [
    {id: '1', value: 'React'  },
    {id: '2', value: 'Redux'  },
    {id: '3', value: 'Vue'  },
    {id: '4', value: 'React Native'  },
    {id: '5', value: 'Angular'  },
    {id: '6', value: 'Next'  },    
    {id: '7', value: 'Nest'  }
    ],

    onSelect(item){
        console.log('selected item', item);
    }


})

window.s = select;