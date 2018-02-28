import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {Div, Span} from 'glamorous'
import FA from 'react-fontawesome'

const store = observable({
  itemCount: 0,
  lastItem: null,
})

const handleBuyClick = name => () => {
  store.itemCount += 1
  store.lastItem = name
}

const handleClearCart = () => {
  store.itemCount = 0
  store.lastItem = null
}

const Cart = observer(() =>
  <Div fontSize='2rem' color='white'>
    <Span marginRight='0.5rem'>
      <FA name='shopping-cart'/>
    </Span>
    <Span marginRight='0.5rem' userSelect='none'>
      {store.itemCount}
    </Span>
    <Span onClick={handleClearCart} cursor='pointer'>
      <FA name='trash-o'/>
    </Span>
  </Div>
)

const Header = observer(props =>
  <Div display='flex' background='#ff8e25' padding='1rem'>
    <Div>{props.children}</Div>
    <Div flex='1'/>
  </Div>
)

const LastBought = observer(() =>
  <Div>{`Last bought item: ${store.lastItem || ''}`}</Div>
)

export const App = observer(props =>
  <Div>
    <Header>
      <Cart/>
    </Header>
    <Div padding='1rem'>
      <Div marginBottom='2rem'/>
      <Div
        onClick={handleBuyClick('shoe')}
        cursor='pointer'
        userSelect='none'
      >
        <Span marginRight='0.5rem'><FA name='plus'/></Span>
        <Span>Buy shoe</Span>
      </Div>
      <Div marginBottom='2rem'/>
      <Div
        onClick={handleBuyClick('shirt')}
        cursor='pointer'
        userSelect='none'
      >
        <Span marginRight='0.5rem'><FA name='plus'/></Span>
        <Span>Buy shirt</Span>
      </Div>
      <Div marginBottom='2rem'/>

      <LastBought/>
    </Div>
  </Div>
)
