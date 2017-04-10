var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

const spotifyTrackType = module.exports = new GraphQLObjectType({
	name:'spotifyTrack',
	fields: () => ({
		album:			{type:spotifyAlbumType},
		artists:			{type:new GraphQLList(spotifyArtistType)},
		available_markets:	{type: new GraphQLList(GraphQLString)},
		disc_number:		{type:GraphQLInt},
		duration_ms:		{type:GraphQLInt},
		external_ids:		{type:GraphQLString,
								resolve:({external_ids})=>{return JSON.stringify(external_ids)}},
		external_urls:		{type:GraphQLString,
								resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		href:				{type:GraphQLString},
		id:					{type:GraphQLString},
		linked_from:		{type:spotifyLinkedTrackType},
		name:				{type:GraphQLString},
		popularity:			{type:GraphQLInt},
		preview_url:		{type:GraphQLString},
		track_numer:		{type:GraphQLInt},
		type:				{type:GraphQLString},
		uri:				{type:GraphQLString},
	})
});

const spotifyLinkedTrackType = new GraphQLObjectType({
	name:'spotifyLinkedTrack',
	fields: ()=>({
		external_urls:	{type:GraphQLString,
							resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		href:	{type:GraphQLString},
		id:		{type:GraphQLString},
		type:	{type:GraphQLString},
		uri:	{type:GraphQLString},
	})
});

const spotifyAlbumType = require('./spotifyAlbumType');
const spotifyArtistType = require('./spotifyArtistType');