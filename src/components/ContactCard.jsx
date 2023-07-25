const ContactCard = ({ actor, deleteActor }) => {
    return (
      <tr>
  
          <td>
              <img src={actor.pictureUrl} alt="actor"/>
          </td>
          <td>
              <p>{actor.name}</p>
          </td>
          <td>
              <p>{actor.popularity.toFixed(2)}</p>
          </td>
          <td>
              {actor.wonOscar && <p>🏆</p>}
          </td>
          <td>
              {actor.wonEmmy && <p>🏆</p>}
          </td>
          <td>
              <button onClick={() => deleteActor(actor.id)}>Delete</button>
          </td>
  
      </tr>
    )
  }
  
  export default ContactCard