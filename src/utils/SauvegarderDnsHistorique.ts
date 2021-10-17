import { history } from '../redux/rootReducer'

const sauvegarderDansHistorique = (url: string) => history.push(url)
export default sauvegarderDansHistorique

/* ------------------------https://www.pluralsight.com/guides/using-react-with-the-history-api---------------

Les objets d'historique ont généralement les propriétés et méthodes suivantes:

longueur nombre) Le nombre d'entrées dans la pile d'historique
action - (chaîne) Action actuelle (Push, REPLACE ou POP)
location - (objet) L'emplacement actuel. Peut avoir les propriétés suivantes:

chemin d'accès - (chaîne) Le chemin de l'URL
search - (string) La chaîne de requête d'URL
hash - (string) Le fragment de hachage de l'URL
state - (chaîne) état spécifique à l'emplacement qui a été fourni, par exemple. 
  Push (chemin, état) lorsque cet emplacement a été poussé sur la pile. 
  Uniquement disponible dans l'historique du navigateur et de la mémoire.
Push (chemin, [état]) - (fonction) Insère une nouvelle entrée dans la pile d'historique.
replace (chemin, [état]) - (fonction) Remplace l'entrée actuelle sur la pile d'historique
go (n) - (fonction) Déplace le pointeur dans la pile d'historique de n entrées
goBack () - (fonction) Equivalent à go (-1)
goForward () - (fonction) Equivalent à go (1)
block (Invite) - (fonction) Empêche la navigation

*/

/*

Ainsi, lors de la navigation, vous pouvez transmettre des accessoires à l'objet d'historique, comme

this.props.history.Push({ pathname: '/template', search: '?query=abc', state: { detail: response.data } })
ou similaire pour le composant Link ou le composant Redirect

<Link to={{ pathname: '/template', search: '?query=abc', state: { detail: response.data } }}> My Link </Link>
puis dans le composant rendu avec /template route, vous pouvez accéder aux accessoires passés comme

this.props.location.state.detail

N'oubliez pas non plus que, 
lorsque vous utilisez des objets d'historique ou de localisation provenant d'accessoires, 
vous devez connecter le composant avec withRouter.

---

vous pouvez utiliser,

this.props.history.Push("/template", { ...response }) ou this.props.history.Push("/template", { response: response })

alors vous pouvez accéder aux données analysées à partir du composant /template en suivant le code,

const state = this.props.location.state

---

Si vous devez transmettre des paramètres d'URL

theres un excellent post explication par Tyler McGinnis sur son site, Lien vers le post

voici des exemples de code:

sur le composant history.Push:

this.props.history.Push(/home:${this.state.userID})

sur le composant routeur, vous définissez la route:

<Route path='/home:myKey' component={Home} />

sur le composant Accueil:

componentDidMount(){ const { myKey } = this.props.match.params console.log(myKey ) }

*/

/*
Hook: const history = useHistory()

--------
const { path } = useRouteMatch()

return (
  <Route path={`${path}/tweets`}>
    <Tweets />
  </Route>
)

--------
const { search } = useLocation()
console.log(search) // "?filter=top&origin=im"

--
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

...

const { search } = useLocation()
const values = queryString.parse(search)
console.log(values.filter) // "top"
console.log(values.origin) // "im"

*/
