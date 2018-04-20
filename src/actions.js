import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const initialState = [
	{
		type: ADD_COMMENT,
		id: uuid.v4(),
		text: 'Ello'
	},

	{
		type: ADD_COMMENT,
		id: uuid.v4(),
		text: 'Salut'
	},
]

export function addComment(text) {
	return {
	type: ADD_COMMENT,
	id: uuid.v4(),
	text: text
	}
}

export function thumbUpComment(commentId) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentId
	}
}

export function thumbDownComment(commentId) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentId
	}
}

