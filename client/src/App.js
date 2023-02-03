import Header from './components/Header';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Projects from './components/Projects';
import AddProjectModal from './components/AddProjectModal';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        },
      },
    },
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
});



function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <AddProjectModal />
          <Clients />
          <Projects />

        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
