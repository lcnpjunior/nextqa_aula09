import { test, expect } from '@playwright/test';


const BASE_URL = 'https://api.trello.com/1'
const API_KEY = ''
const API_TOKEN = '' 

const AUTH = `OAuth oauth_consumer_key="${API_KEY}", oauth_token="${API_TOKEN}"`
let idBoard = ''
let idBacklog = ''
let idInProgress = ''
let idReview 


test('buscar board', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/members/me/boards`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      'fields': 'name'
    }
  });
  expect(response.ok()).toBeTruthy(); 
  const body = JSON.parse(await response.text())
  idBoard = body[0].id
  console.log(idBoard)
  console.log('id da board',idBoard)
});



test('criar coluna backlog', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/lists`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      name: 'backlog',
      idBoard: idBoard
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.text())
  //console.log(body)
  idBacklog = body.id
  console.log('id da coluna backlog',idBacklog)
});

test('criar coluna in progress', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/lists`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      name: 'in progress',
      idBoard: idBoard
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.text())
  //console.log(body)
  idInProgress = body.id
  console.log('id da coluna in progress',idInProgress)
});

test('criar coluna review', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/lists`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      name: 'review',
      idBoard: idBoard
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.text())
  //console.log(body)
  idReview = body.id
  console.log('id da coluna in progress',idReview)
});

test('criar card 1', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/cards`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      name: 'card 1',
      idList: idBacklog, 
      desc: 'desccr'
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.text())
  //console.log(body)
  idReview = body.id
  console.log('id da coluna in progress',idReview)
});

test('criar card 2', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/cards`, {
    headers: {
      'Authorization': AUTH
    },
    params: {
      name: 'card 2',
      idList: idInProgress, 
      desc: 'descricao'
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.text())
  //console.log(body)
  idReview = body.id
  console.log('id da coluna in progress',idReview)
});

// test('criar card 3', async ({ request }) => {
//   const response = await request.post(`${BASE_URL}/cards`, {
//     headers: {
//       'Authorization': AUTH
//     },
//     params: {
//       name: 'card 3',
//       idList: idReview, 
//       desc: 'descricao'
//     }
//   });
//   expect(response.ok()).toBeTruthy();
//   const body = JSON.parse(await response.text())
//   //console.log(body)
//   idReview = body.id
//   console.log('id da coluna in progress',idReview)
// });