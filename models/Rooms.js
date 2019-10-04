const mongoose = require('mongoose')
const Schema = mongoose.Schema


const roomSchema = new Schema ({
          id: String,
          listing_url: String,
          summary: String,
          name: String,
          space: String,
          description: String,
          neighborhood_overview: String,
          transit: String,
          access: String,
          interaction: String,
          house_rules: String,
          property_type: String,
          room_type: String,
          bed_type: String,
          minimum_nights: String,
          maximum_nights: String,
          cancellation_policy: String,
          accommodates: Number,
          bedrooms: Number,
          beds: Number,
          number_of_reviews: Number,
          guests_included: Number,
          bathrooms: Number,
          price: Number,
          security_deposit: Number,
          cleaning_fee: Number,
          extra_people: Number,
          last_scraped: String,
          calendar_last_scraped: String,
          first_review: Object,
          last_review: Object,
          host: Object,
          review_scores: Object,
          address: Object,
          images: Object,
          amenities: Array,
          reviews: Array,
})




const Rooms = mongoose.model('Room', roomSchema)

module.exports = Rooms