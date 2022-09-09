import { Header } from '../../components/Header'

import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
  } from './styles'

  export function Transactions() {
  
    return (
      <div>
        <Header />
  
        <TransactionsContainer>
  
          <TransactionsTable>
            <tbody>
              
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
      </div>
    )
  }
  