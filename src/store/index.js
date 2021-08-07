const initialState = [
    {
      id: 1,
      name: 'Foundation',
      isCompleted: false,
      isMutable: true,
      items: [
        {
          id: 1,
          text: 'Setup virtual office',
          isFinished: false
        },
        {
          id: 2,
          text: 'Setup mission & vision',
          isFinished: false
        },
        {
          id: 3,
          text: 'Select business name',
          isFinished: false
        },
        {
          id: 4,
          text: 'Buy domains',
          isFinished: false
        }
      ]
    },
    {
      id: 2,
      name: 'Discovery',
      isCompleted: false,
      isMutable: false,
      items: [
        {
          id: 1,
          text: 'Create roadmap',
          isFinished: false
        },
        {
          id: 2,
          text: 'Competitor analysis',
          isFinished: false
        },
      ]
    },
    {
      id: 3,
      name: 'Delivery',
      isCompleted: false,
      isMutable: false,
      items: [
        {
          id: 1,
          text: 'Release marketing website',
          isFinished: false
        },
        {
          id: 2,
          text: 'Release MVP',
          isFinished: false
        }
      ]
    }
  ];

export const state = localStorage.getItem('startupProgress')
  ? JSON.parse(localStorage.getItem('startupProgress'))
  : initialState;

export const updateMutability = (state) => {
  let openNextSection = false;
  state.forEach((section) => {
    if (openNextSection) {
      section.isMutable = true
      openNextSection = false
    }  
  if (section.items.every((i) => i.isFinished === true)) {
    section.isCompleted = true
    section.isMutable = false
    openNextSection = true
    }
  })
  return state;
}

export const isStartupFinished = (state) => {
  return state.every((section) => section.isCompleted === true)
}

export const saveStateToLS = (newState) => {
    localStorage.setItem('startupProgress', JSON.stringify(newState))
  }
