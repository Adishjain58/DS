package HashTable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// Generic hashTable which supports any combination of String and Integer as key->value pairs
public class HashTable<T, V> {
    // List which will store hash class which has key and value
    List<List<Hash<T, V>>> list;
    // total length of the list
    int length;

    // Class which will have our key and value, reason why I created a class so that
    // I can have key of datatype as string and value of datatype Integer.
    // If I used list then I won't be able to store differnt type of data in it.
    class Hash<k, v> {
        k key;
        v value;

        Hash(k key, v value) {
            this.key = key;
            this.value = value;
        }

        k getKey() {
            return this.key;
        }

        v getValue() {
            return this.value;
        }
    }

    HashTable(int length) {
        // When an object of HashTable is created, filling it with null as per the
        // length passed in the object parameters because in java we can't set a value
        // at a specific index directly if no value is present there already
        list = new ArrayList<>(Collections.nCopies(length, null));
        this.length = length;
    }

    int _hash(T key) {
        int hash = 0;
        if (key instanceof String) {
            for (int i = 0; i < ((String) key).length(); i++) {
                hash = (hash + Character.codePointAt(((String) key), i) * i) % this.length;
            }
        } else {
            hash = ((Integer) key) % this.length;
        }
        return hash;
    }

    /*
     * When storing a value in out hashtable first we will get an index using hash
     * function and at that index of List,
     * firstly add a new List of type Hash if the value present at this index is
     * null, then add the key->value pair inside the list which is present at this
     * index
     */
    void put(T key, V value) {
        int address = this._hash(key);
        if (this.list.get(address) == null) {
            List<Hash<T, V>> newList = new ArrayList<>();
            this.list.set(address, newList);
        }
        this.list.get(address).add(new Hash<T, V>(key, value));
    }

    /*
     * When retrieving data from hashtable using key, we will first generate an
     * index using hash function and firstly check if we have a proper list at this
     * index.
     * if list is there then from this list
     * value using getValue() method of Hash class
     */
    V get(T key) {
        int address = this._hash(key);
        List<Hash<T, V>> indexList = this.list.get(address);
        if (indexList != null) {
            // Iterating through the list at the address index because there is a chance
            // that we had a collision and multiple key->value pairs are present in the list
            for (int j = 0; j < indexList.size(); j++) {
                if (indexList.get(j).getKey().equals(key)) {
                    return indexList.get(j).getValue();
                }
            }
        }
        return null;
    }

    // This method will return the keys which are stored in our hash Table;
    List<T> keys() {
        List<T> keys = new ArrayList<>();
        for (int i = 0; i < this.list.size(); i++) {
            List<Hash<T, V>> indexList = this.list.get(i);
            if (indexList != null) {
                // In case of colission we can have multiple values at each index that's why
                // iterate over this array
                // and return those keys as well.
                for (int j = 0; j < indexList.size(); j++) {
                    keys.add(indexList.get(j).getKey());
                }
            }
        }
        return keys;
    }

    // This method will return values of a hash table.
    List<V> values() {
        List<V> values = new ArrayList<>();
        for (int i = 0; i < this.list.size(); i++) {
            List<Hash<T, V>> indexList = this.list.get(i);
            if (indexList != null) {
                // In case of colission we can have multiple values at each index that's why
                // iterate over this array
                // and return those values as well.
                for (int j = 0; j < indexList.size(); j++) {
                    values.add(indexList.get(j).getValue());
                }
            }
        }
        return values;
    }

    public static void main(String[] args) {
        HashTable<String, Integer> hashTable = new HashTable<>(50);
        hashTable.put("apple", 1000);
        hashTable.put("grape", 100);
        hashTable.put("mango", 10);
        System.out.println(hashTable.get("apple"));
        System.out.println(hashTable.get("mango"));
        System.out.println(hashTable.keys());
        System.out.println(hashTable.values());

        HashTable<Integer, String> hashTable2 = new HashTable<>(50);
        hashTable2.put(2000, "naruto");
        hashTable2.put(200, "One piece");
        hashTable2.put(10, "Bleach");
        System.out.println(hashTable2.get(2000));
        System.out.println(hashTable2.get(200));
        System.out.println(hashTable2.get(2));
        System.out.println(hashTable2.keys());
        System.out.println(hashTable2.values());
    }

}
