class AddTrackableToUsers < ActiveRecord::Migration[7.1]
  def change
    change_table :users do |t|
      t.datetime :last_sign_in_at
      t.integer :sign_in_count , default: 0, null: false
      t.string :current_sign_in_ip
      t.string :last_sign_in_ip

    end
  end
end
