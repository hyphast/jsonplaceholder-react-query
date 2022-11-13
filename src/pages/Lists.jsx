import React from 'react'
import { CardList } from '../components/CardList'
import { InfiniteScrollCart } from '../components/InfiniteScrollCart'

export const Lists = () => {
  return (
    <>
      <CardList title="Users" resource="users" field="name" />
      <CardList
        title="Posts"
        cardColor="light-green lighten-4"
        resource="posts"
        field="title"
      />
      {/* <InfiniteScrollCart
        title="Infinity Scroll"
        resource="users"
        field="name"
      /> */}
    </>
  )
}
