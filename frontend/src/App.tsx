import { TemaProvider } from './contextos/TemaContexto'
import { IdiomaProvider } from './contextos/IdiomaContexto'
import { NavBar } from './componentes/comum/NavBar'
import { Rodape } from './componentes/comum/Rodape'
import { Sobre } from './componentes/secoes/Sobre'
import { Stack } from './componentes/secoes/Stack'
import { Projetos } from './componentes/secoes/Projetos'
import { Experiencia } from './componentes/secoes/Experiencia'
import { Contato } from './componentes/secoes/Contato'

function App() {
  return (
    <TemaProvider>
      <IdiomaProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
          <NavBar />
          <main>
            <Sobre />
            <Stack />
            <Projetos />
            <Experiencia />
            <Contato />
          </main>
          <Rodape />
        </div>
      </IdiomaProvider>
    </TemaProvider>
  )
}

export default App
