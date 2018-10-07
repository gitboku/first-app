# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_07_150227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.text "title"
    t.text "title_kana"
    t.text "japanese_title"
    t.string "author"
    t.string "author_kana"
    t.string "publisher_name"
    t.integer "isbn"
    t.text "item_caption"
    t.date "seles_date"
    t.integer "item_price"
    t.string "item_url"
    t.string "affiliate_url"
    t.string "small_image_url"
    t.string "medium_image_url"
    t.string "large_image_url"
    t.string "availability"
    t.integer "review_count"
    t.string "review_average"
    t.string "books_genre_id"
    t.integer "vocabulary"
    t.string "official_url"
    t.integer "page"
    t.text "tags"
    t.text "other"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
