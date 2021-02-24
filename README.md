# Petful Server

Live application: [https://amazon-client.cmgrace.vercel.app/](https://amazon-client.cmgrace.vercel.app/)<br/>
Server: [https://warm-reaches-49846.herokuapp.com/](https://warm-reaches-49846.herokuapp.com/)

## API Documentation

### Petful Endpoints

    GET /api/people: Return an array of people waiting in the queue to adopt pet.

```
[
    'Randy Lahey',
    'Trevor Cory',
    'Jim Lahey'
  ]
```

    DELETE /api/people: Delete the first person in the queue.
    
    POST /api/people: Add person to the tail of the queue.
    
    GET /api/pets: Return all pets in queue including cats and dogs.
    
```
dogs: [
    {
      age: 3,
      breed: 'Golden Retriever',
      description: 'A smiling golden-brown golden retreiver listening to music.',
      gender: 'Male',
      imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Zim',
      story: 'Owner Passed away'
    }
  ],

  cats: [
    {
      age: 2,
      breed: 'Bengal',
      description: 'Orange bengal cat with black stripes lounging on concrete.',
      gender: 'Female',
      imageURL:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      name: 'Steve French',
      story: 'Thrown on the street'
    }
  ]
}

```
    
    DELETE /api/pets: Delete the first animal in both of the dog queue and cat queue.
    
    GET /api/cat: Return the first cat in cat queue.

```
{
      age: 2,
      breed: 'Bengal',
      description: 'Orange bengal cat with black stripes lounging on concrete.',
      gender: 'Female',
      imageURL:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      name: 'Steve French',
      story: 'Thrown on the street'
    }
```

    GET /api/dog: Return the first dog in dog queue.

```
{
      age: 3,
      breed: 'Golden Retriever',
      description: 'A smiling golden-brown golden retreiver listening to music.',
      gender: 'Male',
      imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Zim',
      story: 'Owner Passed away'
    }
```

## Technology used

### Frontend

- ReactJS
- React Router
- HTML
- CSS
- Webpack
- Deployed at Vercel

### Backend

- RESTful API
- Node & Express
- Deployed Heroku
