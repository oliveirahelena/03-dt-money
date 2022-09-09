import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
  } from './styles'

  export function Transactions() {
  
    return (
      <div>
        <Header />
        <Summary />
  
        <TransactionsContainer>
  
          <TransactionsTable>
            <tbody>
              
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
      </div>
    )
  }
  