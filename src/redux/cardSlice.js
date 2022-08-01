import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cardState {
  cards: [],
  counter : number,
  tentativesMax : number,
  revealed : Boolean
}

const initialState: cardState = {
  cards: [
    {
      path: "https://www.neozone.org/blog/wp-content/uploads/2021/03/collision-planete-001.jpg",
      revealed : false
    },
    {
      path: "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Hubble_pillars.jpg",
      revealed : false
    },
    {
      path: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/04/HD1_quasar_big__w1200.jpg",
      revealed : false
    },
    {
      path: "https://www.tomsguide.fr/content/uploads/sites/2/2022/06/naasa-james-webb.jpg",
      revealed : false
    },
    {
      path: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2018/02/spacex-falconheavy-770__w1200.jpg",
      revealed : false
    },
    {
      path: "https://static.lexpress.fr/medias_11590/w_2048,h_1146,c_crop,x_0,y_38/w_1000,h_563,c_fill,g_north/v1512474341/photo-de-la-nasa-datee-du-3-aout-2002-d-une-image-artistique-de-la-sonde-voyager_5934558.jpg",
      revealed : false},
    {
      path: "https://images.ladepeche.fr/api/v1/images/view/62dfe6945c7ad957b576af2c/large/image.jpg?v=1",
      revealed : false
    },
    {
      path: "https://live.staticflickr.com/7810/46876469664_4b77d12c59_b.jpg",
      revealed : false
    },
    {
      path: "https://www.neozone.org/blog/wp-content/uploads/2021/03/collision-planete-001.jpg",
      revealed : false
    },
    {
      path: "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Hubble_pillars.jpg",
      revealed : false
    },
    {
      path: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/04/HD1_quasar_big__w1200.jpg",
      revealed : false
    },
    {
      path: "https://www.tomsguide.fr/content/uploads/sites/2/2022/06/naasa-james-webb.jpg",
      revealed : false
    },
    {
      path: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2018/02/spacex-falconheavy-770__w1200.jpg",
      revealed : false
    },
    {
      path: "https://static.lexpress.fr/medias_11590/w_2048,h_1146,c_crop,x_0,y_38/w_1000,h_563,c_fill,g_north/v1512474341/photo-de-la-nasa-datee-du-3-aout-2002-d-une-image-artistique-de-la-sonde-voyager_5934558.jpg",
      revealed : false},
    {
      path: "https://images.ladepeche.fr/api/v1/images/view/62dfe6945c7ad957b576af2c/large/image.jpg?v=1",
      revealed : false
    },
    {
      path: "https://live.staticflickr.com/7810/46876469664_4b77d12c59_b.jpg",
      revealed : false
    }
  ],
  counter : 0,
  tentativesMax : 8
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetCards : (state, action : PayloadAction<any> )=>{
        state.cards = action.payload
    },
    updateCardsState: (state, action: PayloadAction<any[]>) => {
      state.cards = action.payload
    },
    increamentCounter : (state)=>{
        state.counter +=1
    },
    resetCounter : (state)=>{
      state.counter = 0
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { updateCardsState, increamentCounter, resetCounter,resetCards } = cardSlice.actions
export default cardSlice.reducer