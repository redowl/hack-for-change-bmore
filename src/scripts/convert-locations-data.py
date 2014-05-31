#!/usr/bin/env python

import argparse
import csv
import json
import sys

def main():
    parser = argparse.ArgumentParser(description='Convert One Stop metadata to JavaScript object.')
    parser.add_argument('locations', help='File containing the one stop locations.')
    args = parser.parse_args()

    reader = csv.reader(open(args.locations), delimiter=',', quotechar='"')
    header = reader.next()

    keys = ['county',
            'center',
            'services_offered',
            'description',
            'hours',
            'phone',
            'fax',
            'espanol',
            'tty',
            'lat',
            'long',
            'email',
            'website'
           ]
    locations = []
    for line in reader:
        new_loc = {}
        for i, item in enumerate(line):
            if keys[i] == '':
                continue

            val = item.strip()
            if keys[i] in ('lat', 'long'):
                val = float(val)
            if keys[i] == 'email':
                val = val.replace('mailto:', '').strip()

            new_loc[keys[i]] = val
        locations.append(new_loc)
    loc_string = json.dumps(locations, indent=2)

    outname = 'locations.js'
    outfile = open(outname, 'w')
    outfile.write('var locations = ' + loc_string + ';')
    outfile.close()
    print 'Locations object written to "%s"' % outname
 
if __name__ == "__main__":
    main()
